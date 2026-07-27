import EvoOtServerPolandKeywordPage, { generateMetadata } from './evo-ot-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOtServerPolandKeywordPage />;
}
