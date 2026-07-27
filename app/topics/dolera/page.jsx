import DoleraKeywordPage, { generateMetadata } from './dolera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DoleraKeywordPage />;
}
