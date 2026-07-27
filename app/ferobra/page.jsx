import FerobraPage, { generateMetadata } from './ferobra';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FerobraPage />;
}
