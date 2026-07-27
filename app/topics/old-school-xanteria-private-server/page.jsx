import OldSchoolXanteriaPrivateServerKeywordPage, { generateMetadata } from './old-school-xanteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolXanteriaPrivateServerKeywordPage />;
}
