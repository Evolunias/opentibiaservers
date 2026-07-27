import Luminera80HighExpServerKeywordPage, { generateMetadata } from './luminera-8-0-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera80HighExpServerKeywordPage />;
}
