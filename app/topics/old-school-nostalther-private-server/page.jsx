import OldSchoolNostaltherPrivateServerKeywordPage, { generateMetadata } from './old-school-nostalther-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNostaltherPrivateServerKeywordPage />;
}
