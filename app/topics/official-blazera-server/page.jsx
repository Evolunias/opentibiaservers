import OfficialBlazeraServerKeywordPage, { generateMetadata } from './official-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialBlazeraServerKeywordPage />;
}
