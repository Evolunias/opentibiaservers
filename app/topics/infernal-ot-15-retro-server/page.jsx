import InfernalOt15RetroServerKeywordPage, { generateMetadata } from './infernal-ot-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOt15RetroServerKeywordPage />;
}
