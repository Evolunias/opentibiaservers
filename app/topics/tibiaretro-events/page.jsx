import TibiaretroEventsKeywordPage, { generateMetadata } from './tibiaretro-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroEventsKeywordPage />;
}
