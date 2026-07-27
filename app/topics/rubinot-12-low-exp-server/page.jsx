import Rubinot12LowExpServerKeywordPage, { generateMetadata } from './rubinot-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot12LowExpServerKeywordPage />;
}
