import Rubinot13EvoServerKeywordPage, { generateMetadata } from './rubinot-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot13EvoServerKeywordPage />;
}
