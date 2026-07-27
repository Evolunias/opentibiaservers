import OldSchoolCanobPrivateServerKeywordPage, { generateMetadata } from './old-school-canob-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCanobPrivateServerKeywordPage />;
}
