import RuberaKeywordPage, { generateMetadata } from './rubera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuberaKeywordPage />;
}
