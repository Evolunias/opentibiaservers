import RetroEmpirebrServerKeywordPage, { generateMetadata } from './retro-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroEmpirebrServerKeywordPage />;
}
