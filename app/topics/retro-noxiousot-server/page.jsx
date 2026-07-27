import RetroNoxiousotServerKeywordPage, { generateMetadata } from './retro-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroNoxiousotServerKeywordPage />;
}
