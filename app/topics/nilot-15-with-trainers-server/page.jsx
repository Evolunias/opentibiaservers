import Nilot15WithTrainersServerKeywordPage, { generateMetadata } from './nilot-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot15WithTrainersServerKeywordPage />;
}
