import HarmoniaOtRetroServerUsaKeywordPage, { generateMetadata } from './harmonia-ot-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtRetroServerUsaKeywordPage />;
}
