import RetroInfernalOtServerKeywordPage, { generateMetadata } from './retro-infernal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroInfernalOtServerKeywordPage />;
}
