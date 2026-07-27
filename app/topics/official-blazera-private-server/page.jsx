import OfficialBlazeraPrivateServerKeywordPage, { generateMetadata } from './official-blazera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialBlazeraPrivateServerKeywordPage />;
}
