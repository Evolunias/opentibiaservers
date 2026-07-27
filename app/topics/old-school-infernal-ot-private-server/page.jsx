import OldSchoolInfernalOtPrivateServerKeywordPage, { generateMetadata } from './old-school-infernal-ot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolInfernalOtPrivateServerKeywordPage />;
}
