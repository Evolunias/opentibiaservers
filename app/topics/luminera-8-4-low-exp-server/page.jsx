import Luminera84LowExpServerKeywordPage, { generateMetadata } from './luminera-8-4-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera84LowExpServerKeywordPage />;
}
