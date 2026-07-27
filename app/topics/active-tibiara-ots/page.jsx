import ActiveTibiaraOtsKeywordPage, { generateMetadata } from './active-tibiara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaraOtsKeywordPage />;
}
