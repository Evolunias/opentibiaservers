import OldSchoolCoxaotPrivateServerKeywordPage, { generateMetadata } from './old-school-coxaot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCoxaotPrivateServerKeywordPage />;
}
