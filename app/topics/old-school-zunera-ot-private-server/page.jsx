import OldSchoolZuneraOtPrivateServerKeywordPage, { generateMetadata } from './old-school-zunera-ot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZuneraOtPrivateServerKeywordPage />;
}
