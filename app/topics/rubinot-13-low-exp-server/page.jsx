import Rubinot13LowExpServerKeywordPage, { generateMetadata } from './rubinot-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot13LowExpServerKeywordPage />;
}
