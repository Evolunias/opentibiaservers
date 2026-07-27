import EvoSaintsotServerKeywordPage, { generateMetadata } from './evo-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoSaintsotServerKeywordPage />;
}
