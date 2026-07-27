import OldSchoolHarmoniaOtPrivateServerKeywordPage, { generateMetadata } from './old-school-harmonia-ot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolHarmoniaOtPrivateServerKeywordPage />;
}
