import Luminera96HighExpServerKeywordPage, { generateMetadata } from './luminera-9-6-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera96HighExpServerKeywordPage />;
}
