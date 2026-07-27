import Rubinot12EvoServerKeywordPage, { generateMetadata } from './rubinot-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot12EvoServerKeywordPage />;
}
