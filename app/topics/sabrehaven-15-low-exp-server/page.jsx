import Sabrehaven15LowExpServerKeywordPage, { generateMetadata } from './sabrehaven-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven15LowExpServerKeywordPage />;
}
