import Medivia96LowExpServerKeywordPage, { generateMetadata } from './medivia-9-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia96LowExpServerKeywordPage />;
}
