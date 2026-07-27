import OldSchoolZezeniaOnlinePrivateServerKeywordPage, { generateMetadata } from './old-school-zezenia-online-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZezeniaOnlinePrivateServerKeywordPage />;
}
