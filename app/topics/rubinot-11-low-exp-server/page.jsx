import Rubinot11LowExpServerKeywordPage, { generateMetadata } from './rubinot-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot11LowExpServerKeywordPage />;
}
