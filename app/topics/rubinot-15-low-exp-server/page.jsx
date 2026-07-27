import Rubinot15LowExpServerKeywordPage, { generateMetadata } from './rubinot-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot15LowExpServerKeywordPage />;
}
