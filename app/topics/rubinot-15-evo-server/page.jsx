import Rubinot15EvoServerKeywordPage, { generateMetadata } from './rubinot-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot15EvoServerKeywordPage />;
}
