import Luminera13LowExpServerKeywordPage, { generateMetadata } from './luminera-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera13LowExpServerKeywordPage />;
}
