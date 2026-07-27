import RuberaWorldKeywordPage, { generateMetadata } from './rubera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuberaWorldKeywordPage />;
}
