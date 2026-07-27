import EvoOpenTibiaServerArgentinaKeywordPage, { generateMetadata } from './evo-open-tibia-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOpenTibiaServerArgentinaKeywordPage />;
}
