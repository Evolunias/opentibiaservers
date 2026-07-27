import EvoZuneraOtServersKeywordPage, { generateMetadata } from './evo-zunera-ot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoZuneraOtServersKeywordPage />;
}
