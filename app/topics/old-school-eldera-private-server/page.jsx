import OldSchoolElderaPrivateServerKeywordPage, { generateMetadata } from './old-school-eldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolElderaPrivateServerKeywordPage />;
}
