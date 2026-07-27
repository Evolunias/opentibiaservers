import OfficialNoxiousotPrivateServerKeywordPage, { generateMetadata } from './official-noxiousot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNoxiousotPrivateServerKeywordPage />;
}
