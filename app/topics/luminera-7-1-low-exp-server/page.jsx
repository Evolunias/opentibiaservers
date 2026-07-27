import Luminera71LowExpServerKeywordPage, { generateMetadata } from './luminera-7-1-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera71LowExpServerKeywordPage />;
}
