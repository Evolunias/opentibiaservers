import ActiveTibiaraClientKeywordPage, { generateMetadata } from './active-tibiara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaraClientKeywordPage />;
}
