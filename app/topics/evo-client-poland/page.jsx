import EvoClientPolandKeywordPage, { generateMetadata } from './evo-client-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoClientPolandKeywordPage />;
}
