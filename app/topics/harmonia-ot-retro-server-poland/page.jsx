import HarmoniaOtRetroServerPolandKeywordPage, { generateMetadata } from './harmonia-ot-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtRetroServerPolandKeywordPage />;
}
