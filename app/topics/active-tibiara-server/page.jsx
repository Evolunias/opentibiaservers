import ActiveTibiaraServerKeywordPage, { generateMetadata } from './active-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaraServerKeywordPage />;
}
