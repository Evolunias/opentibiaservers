import OldSchoolRealestaPrivateServerKeywordPage, { generateMetadata } from './old-school-realesta-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealestaPrivateServerKeywordPage />;
}
