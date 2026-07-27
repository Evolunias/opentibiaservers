import OxygenotEventsKeywordPage, { generateMetadata } from './oxygenot-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotEventsKeywordPage />;
}
