import Luminera100HighExpServerKeywordPage, { generateMetadata } from './luminera-10-0-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera100HighExpServerKeywordPage />;
}
