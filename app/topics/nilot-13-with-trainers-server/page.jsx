import Nilot13WithTrainersServerKeywordPage, { generateMetadata } from './nilot-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot13WithTrainersServerKeywordPage />;
}
