import Sabrehaven96LowExpServerKeywordPage, { generateMetadata } from './sabrehaven-9-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven96LowExpServerKeywordPage />;
}
