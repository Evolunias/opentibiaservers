import EvoluniaBaiakServerPolandKeywordPage, { generateMetadata } from './evolunia-baiak-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaBaiakServerPolandKeywordPage />;
}
