import OldSchoolTibiamePrivateServerKeywordPage, { generateMetadata } from './old-school-tibiame-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiamePrivateServerKeywordPage />;
}
